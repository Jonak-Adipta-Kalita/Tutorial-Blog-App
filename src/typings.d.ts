type Base = {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: string;
  title: string;
  description: string;
}

interface Author extends Base {
  name: string;
  slug: string;
  image: Image;
  bio: Block[];
}

interface Category extends Base {
  title: string;
  description: string;
}

interface Image extends Base {
  asset: {
    _ref: string;
    _type: "refference";
  };
}

interface Block {
  _key: string;
  _type: string;
  children: Span[];
  markDefs: any[];
  style: string;
}

interface Span {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}
