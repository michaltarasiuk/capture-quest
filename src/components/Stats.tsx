"use client";

import {Card, CardBody} from "@heroui/react";

import {cn} from "@/lib/cn";

export function Stats() {
  return (
    <section
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3")}>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2 className={cn("text-3xl font-bold text-blue-600")}>0</h2>
          <p className={cn("text-sm text-gray-600")}>Quests Completed</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2 className={cn("text-3xl font-bold text-blue-600")}>0</h2>
          <p className={cn("text-sm text-gray-600")}>Total Points</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2 className={cn("text-3xl font-bold text-purple-600")}>0%</h2>
          <p className={cn("text-sm text-gray-600")}>Progress</p>
        </CardBody>
      </Card>
    </section>
  );
}
