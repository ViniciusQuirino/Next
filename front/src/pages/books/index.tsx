import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Book from "@/types";
import api from "@/services/api";
import { Center, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  books: Book[];
}

const Books: NextPage<Props> = ({ books }) => {
  const router = useRouter();
  const { query } = router.query;

  // padding = p
  // espaço = spacing

  return (
    <Center p={10}>
      <List spacing={3}>
        {books.map((book, index) => (
          <ListItem key={index}>
            <Link as={NextLink} href={`/books/${book.id}`}>
              {book.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Center>
  );
};

export default Books;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await api.get("/books");
  const books: Book[] = response.data;
  console.log(books);

  return { props: { books } };
};
