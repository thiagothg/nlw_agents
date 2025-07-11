import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();
  const id = params.id;

  if (!id) {
    return <Navigate replace to="/" />;
  }

  // const { data, isLoading } = useQuery({
  //     queryKey: ["get-room", id],
  //     queryFn: async () => {
  //         const response = await fetch(`http://localhost:3333/rooms/${id}`);
  //         return await response.json();
  //     },
  // });
  return (
    <div>
      <h1>Create Room {id}</h1>
    </div>
  );
}
