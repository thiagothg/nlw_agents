import { CreateRoomForm } from "@/components/rooms/create-room-form";
import { RoomList } from "@/components/rooms/room-list";

export function CreateRoom() {
  return (
    <div className="min-h-scream px-4 py-8">
      <div className="mx-auto  max-w-4xl">
        <div className="grid grid-clos-2 items-start gap-8">
          <CreateRoomForm />

          <RoomList />
        </div>
      </div>
    </div>
  );
}
