export default {
  name:'testimonials',
  title:'Testimonials',
  type: 'document',
  fields:[
    {
      name: "priority",
      title: "Priority",
      type: "number",
    },
      { 
          name:'name',
          title:'Name',
          type: 'string'
      },
      {
          name:'company',
          title:'Company',
          type:'string'
      },
      {
          name:'imgurl',
          title:'ImgUrl',
          type: 'image',
          options: {
            hotspot: true,
          },
      },  
      {
          name:'feedback',
          title:'Feedback',
          type:'string'
      }
  ]
}