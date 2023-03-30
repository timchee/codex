import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect } from "react";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";

interface Item {
    id: number;
    name: string;
    active: boolean;
  }
  
  const items: Item[] = [
    { id: 1, name: "Item 1", active: true },
    { id: 2, name: "Item 2", active: false },
    { id: 3, name: "Item 3", active: true },
  ];
  
  function checkAndChangeColor(id: number): void {
    const item = items.find((item) => item.id === id);
    if (item && item.active) {
      console.log(`ID ${id} is active`);
      // Change color of the text here
    } else {
      console.log(`ID ${id} is not active`);
    }
  }
  
  checkAndChangeColor(1);
  