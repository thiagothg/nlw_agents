import { useRooms } from "@/http/use-rooms";
import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function RoomList() {
  const { data, isLoading } = useRooms();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
      </CardHeader>
      <CardDescription>
        <p>Acesso rápido a salas recentes.</p>
      </CardDescription>
      <CardContent className="flex flex-col gap-3">
        {isLoading && <p>Carregando...</p>}
        {data &&
          data.map((room) => (
            <Link
              key={room.id}
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
              to={`/rooms/${room.id}`}
            >
              <div className="flex-1 flex felx-col gap-1">
                <h2 className="font-medium">{room.name}</h2>

                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="secondary">
                    {dayjs(room.createdAt).toNow()}
                  </Badge>

                  <Badge className="text-xs" variant="secondary">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </div>

              <span className="flex items-center gap-1 text-sm">
                Entrar
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
      </CardContent>
    </Card>
  );
}
