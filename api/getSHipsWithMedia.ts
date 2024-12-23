import { ApiData } from '@/types/api.type';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react/hooks/useQuery';

type ShipTypeGeneratedByGql = {
  id: string;
  name: string;
};

const QUERY = gql`query getShips($limit: Int!) {    ships(limit: $limit) {      id      name   }  }`;

function useApiGetShips(count: number) {
  const { loading, error, data } = useQuery<{
    ships: ShipTypeGeneratedByGql[];
  }>(QUERY, {
    variables: { limit: count },
  });

  const ships = {
    customShip: data?.ships,
  };

  return { loading, error, data: ships };
}

export default useApiGetShips;
