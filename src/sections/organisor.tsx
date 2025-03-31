
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const people = [
  {
    id: "person-1",
    name: "Sa'ad",
    role: "Role",
    description:
      "Single. Ready to mingle. UwU🥺👉👈",
    avatar: "/saad.png",
  },
  {
    id: "person-2",
    name: "Vahbya",
    role: "Role",
    description: "Mischievous or cute? Guess we'll never know coz she is a raccoon.",
    avatar: "/baaaaav.jpeg",
  },
  {
    id: "person-3",
    name: "Medhav",
    role: "Role",
    description:
      "Chumbit je t'aime",
    avatar: "/dav.jpeg",
  },
  {
    id: "person-4",
    name: "Ranish",
    role: "Role",
    description: "UwU🥺👉👈",
    avatar: "/ranesh.jpeg",
  },
  {
    id: "person-5",
    name: "Avi Tutul",
    role: "Role",
    description:
      "Vin mange 7 cari dimanche le 6",
    avatar: "/avi.jpeg",
  },
  {
    id: "person-6",
    name: "Jeniven",
    role: "Role",
    description:
      "jeniven content ...",
    avatar: "/jeniven.jpeg",
  },
  {
    id: "person-7",
    name: "Bilta",
    role: "Role",
    description:
      "Mo srti ti riviere selmaa mo pnaaaa en accann ranesh",
    avatar: "/sneha_woof.jpeg",
  },
  {
    id: "person-8",
    name: "Suhail x Zaki",
    role: "Role",
    description:
      "Kot gueter, _ fan kk",
    avatar: "/kot_geter.png",
  },
];

const Team2 = () => {
  return (
    <section className="">
      <div className="container flex flex-col items-start text-left">
        <h2 className="text-2xl font-bold text-pretty lg:text-4xl mb-2">
          Our organising team
        </h2>
      </div>
      <div className="container mt-5 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {people.map((person) => (
          <div key={person.id} className="flex items-start space-x-3">
            <Avatar className="mb-4 size-20 md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-medium">{person.name}</p>
              <p className="py-3 text-sm text-muted-foreground">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team2 };
