import { TLocation } from "@entities/location"
import { ROOT_URL } from "@shared/consts"
import axios from "axios"
import { useEffect, useState } from "react"


export const useGetLocationsByPage = (page = 1) => {
  const [response, setResponse] = useState<QueryLocations | null>(null)
  const [error, setError] = useState<unknown | null>(null)
  const [loading, setLoading] = useState(false)

  const fetch = async () => {
    setLoading(true)
    const [data, err, loading] = await getLocationsByPage(page)
    setResponse(data)
    setError(err)
    setLoading(loading)
  }
  useEffect(() => {
    fetch()
  }, [page])
  return { response, error, loading }
}


type QueryLocations = {
  info: Info,
  results: TLocation[]
}

type Info = {
  count: number,
  next: string | null,
  pages: number,
  prev: null | string,
}

type Result = [QueryLocations | null, unknown, boolean]

const getLocationsByPage = async (page: number): Promise<Result> => {
  try {
    const response = await axios.get<QueryLocations>(ROOT_URL + `/location?page=${page}`)
    return [response.data, null, false]
  }
  catch (err) {
    return [null, err, false]
  }
}
