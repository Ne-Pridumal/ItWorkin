import { useGetCharactersByPage } from "@features/characters"
import { useGetLocationsByPage } from "@features/location"

export type TUrl = "location" | 'character'
export const useGetDataByDestination = (url: TUrl, page = 1) => (
  url === 'location' ? useGetLocationsByPage(page) : useGetCharactersByPage(page)
)
