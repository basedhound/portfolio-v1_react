export default {
  name: "brands",
  title: "Brands",
  type: "document",
  fields: [
    {
      name: "priority",
      title: "Priority",
      type: "number",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
};
