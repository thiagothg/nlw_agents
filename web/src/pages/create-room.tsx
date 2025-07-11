import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      return (await response.json()) as GetRoomsAPIResponse;
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <h1>Create Room</h1>
      {isLoading && <p>Loading...</p>}
      {data &&
        data.map((room) => (
          <div key={room.id}>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <Link to={`/rooms/${room.id}`}>Room</Link>
          </div>
        ))}
      {data && data.length === 0 && <p>No rooms found</p>}

      <Link to="/rooms/new">Room</Link>
    </div>
  );
}
