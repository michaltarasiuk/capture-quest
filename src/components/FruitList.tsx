"use client";

import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import {cn} from "@/lib/cn";

export function FruitList() {
  return (
    <div className={cn("grid grid-cols-2 gap-2 sm:grid-cols-4")}>
      {List.map((item, index) => (
        <Card key={index} shadow="sm">
          <CardBody className={cn("overflow-visible p-0")}>
            <Image
              src={item.img}
              alt={item.title}
              width="100%"
              radius="lg"
              shadow="sm"
              className={cn("aspect-square object-cover")}
            />
          </CardBody>
          <CardFooter className={cn("text-small")}>
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

const List = [
  {
    title: "Orange",
    img: "/fruit-1.jpeg",
  },
  {
    title: "Tangerine",
    img: "/fruit-2.jpeg",
  },
  {
    title: "Raspberry",
    img: "/fruit-3.jpeg",
  },
  {
    title: "Lemon",
    img: "/fruit-4.jpeg",
  },
  {
    title: "Avocado",
    img: "/fruit-5.jpeg",
  },
  {
    title: "Lemon 2",
    img: "/fruit-6.jpeg",
  },
  {
    title: "Banana",
    img: "/fruit-7.jpeg",
  },
  {
    title: "Watermelon",
    img: "/fruit-8.jpeg",
  },
];
