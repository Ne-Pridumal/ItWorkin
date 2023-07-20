import { TCharacter } from "@entities/characters";
import { ROOT_URL } from "@shared/consts"
import axios from "axios"
import { useEffect, useState } from "react";


export const useGetCharactersByPage = (page = 1) => {
  const [response, setResponse] = useState<QueryCharacters | null>(null)
  const [error, setError] = useState<unknown | null>(null)
  const [loading, setLoading] = useState(false)

  const fetch = async () => {
    setLoading(true)
    const [data, err, loading] = await getCharactersByPage(page)
    setResponse(data)
    setError(err)
    setLoading(loading)
  }
  useEffect(() => {
    fetch()
  }, [page])
  return { response, error, loading }
}


type QueryCharacters = {
  info: Info,
  results: TCharacter[],
}

type Info = {
  count: number,
  next: string | null,
  pages: number,
  prev: null | string,
}

type Result = [QueryCharacters | null, unknown, boolean]

const getCharactersByPage = async (page: number): Promise<Result> => {
  try {
    const response = await axios.get<QueryCharacters>(ROOT_URL + `/character?page=${page}`)
    return [response.data, null, false]
  }
  catch (err) {
    return [null, err, false]
  }
}
