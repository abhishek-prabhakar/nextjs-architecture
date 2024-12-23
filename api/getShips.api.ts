import { ApiData } from '@/types/api.type';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react/hooks/useQuery';

type ShipTypeGeneratedByGql = {
  id: string;
  name: string;
};

type Ship = {
  id: string;
  name: string;
};

const QUERY = gql`query getShips($limit: Int!) {    ships(limit: $limit) {      id      name    }  }`;

function useApiGetShips(count: number): ApiData<Ship[]> {
  const { loading, error, data } = useQuery<{
    ships: ShipTypeGeneratedByGql[];
  }>(QUERY, {
    variables: { limit: count },
  });

  return { loading, error, data: data?.ships };
}

export default useApiGetShips;
