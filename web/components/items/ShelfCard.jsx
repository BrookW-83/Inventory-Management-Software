import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ShelfCard = ({ title, description, buttonText }) => {
  return (
    <Card className="m-4 grid grid-cols-3">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <div>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          {description}
        </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className = 'flex items-end ml-64'>
        <Button >{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default ShelfCard;
