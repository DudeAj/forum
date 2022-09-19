import create from "zustand";
// define the store
export const useStore = create((set) => ({
  posts: [
    {
      id: 1,
      title: "This is a New title",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum`,
      author: {
        name: "Ajay Kumar",
        role: "Developer",
      },

      date: "2022-08-21 22:45:00 Z",
    },
    {
      id: 2,
      title: "This is a Another title",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum`,
      author: {
        name: "Shailendra Kumar",
        role: "Tester",
      },

      date: "2022-08-21 22:45:00 Z",
    },
  ],
  comments: [
    {
      id: 1,
      postId: 1,
      parent: 1,
      text: "Hello this is a comment today we are working on comments",

    }
  ]
}));
