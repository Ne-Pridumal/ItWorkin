import { useMemo, useState } from "react";
import { TUrl, useGetDataByDestination } from "../lib";
import { TTableItem } from "@shared/ui/organisms/table/table-item/table-item";
import { TablePage as TablePageConstructor } from "@shared/ui/pages/table-page";
import { TLocation } from "@entities/location";
import { TCharacter } from "@entities/characters";

export const TablePage = ({ }) => {
  const [page, setPage] = useState(1)
  const [destination, setDestination] = useState<TUrl>('character')
  const [paginationSelectorActiveItem, setPaginationSelectorActiveItem] = useState('10')
  const { loading, error, response } = useGetDataByDestination(destination, page)
  const searchSelectorInitValue: TUrl[] = [
    'location',
    'character',
  ]
  const [searchSelectorValue, setSearchSelectorValue] = useState(searchSelectorInitValue)
  const [isReverseSort, setIsReverseSort] = useState<boolean | null>(null)
  const tableList = useMemo<TTableItem[]>(() => {
    const items: TTableItem[] = response?.results.map(item => {
      if (destination === 'location') {
        const i: TLocation = item as TLocation
        return {
          location: i.dimension,
          status: 'unknown',
          name: i.name,
          species: 'dimension',
          subId: '',
          gender: 'unknown',
          id: i.id,
          description: i?.type,
        }
      } else {
        const i: TCharacter = item as TCharacter
        return {
          location: '',
          status: i.status,
          name: i.name,
          species: String(i.species),
          subId: i.origin?.name ?? '',
          gender: String(i.gender),
          id: i.id,
          description: i?.episode ? i.episode[0] : '',
        }
      }
    }) ?? []
    if (isReverseSort === false) {
      items.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        else if (a.name > b.name) {
          return 1
        }
        return 0
      })
    }
    else if (isReverseSort) {
      items.sort((a, b) => {
        if (a.name > b.name) {
          return -1
        }
        else if (a.name < b.name) {
          return 1
        }
        return 0
      })
    }
    return items
  }, [response, destination, page, isReverseSort])

  const searchHandler = (e: string) => {
    setSearchSelectorValue(searchSelectorInitValue.filter(i => i.includes(e.toLowerCase())))
  }

  const paginationSelectorHandler = (e: string) => {
    setPaginationSelectorActiveItem(e)
  }
  const nameClickHandler = () => {
    if (isReverseSort === null) {
      setIsReverseSort(true)
    }
    setIsReverseSort(!isReverseSort)
  }

  if (loading || response === null) {
    return (
      <div>
        LOADING
      </div>
    )
  }
  if (error) {
    return (
      <div>
        Error
      </div>
    )
  }
  return (
    <TablePageConstructor
      headerProps={{
        onName: nameClickHandler,
        isName: isReverseSort
      }}
      tableItems={tableList.slice(0, Number(paginationSelectorActiveItem))}
      paginationProps={{
        onPrevPage() {
          if (response?.info.prev) {
            setPage(page - 1)
          }
        },
        onNextPage() {
          if (response?.info.next) {
            setPage(page + 1)
          }
        },
        totalItems: response!.info.count,
        totalPages: response!.info.pages,
        currentPage: page,
        itemsSelected: [
          Number(response!.results[0].id),
          Number(response!.results[Number(paginationSelectorActiveItem)]?.id ?? response.results[response.results.length - 1].id)
        ],
        selectorProps: {
          items: [
            '5',
            '10',
            '15',
            '20',
          ],
          onItem: (e) => paginationSelectorHandler(e),
          activeItem: paginationSelectorActiveItem,
        },
      }}
      onSearchChange={e => searchHandler(e)}
      searchSelectorProps={{
        onItem: (e) => {
          setPage(1)
          setDestination(e as TUrl)
        },
        activeItem: destination,
        items: searchSelectorValue,
      }}
    />
  );
};
