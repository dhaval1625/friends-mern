import { IPost } from "./definitions";

export const DUMMY_POSTS: IPost[] = [
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/dp-images%2Fbrijesh-reddy-8Um7bQlwBn8-unsplash.jpg?alt=media&token=3840525e-87e4-4db3-8052-8525ee62925e',
      },
      content: 'I am enjoying this app a lot!',
      _id: 'c634f507-64ac-47f4-9678-7f4c280e6b97',
      createdAt: '2023-12-17T06:47:48.205Z',
      likes: {
         list: undefined,
         totalCount: 0,
      },
      comments: {
         list: undefined,
         totalCount: 0,
      },
   },
   {
      author: { name: 'Drashti Solanki', _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990' },
      content: 'Mesmerizing view out there!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c07',
      img: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/post-images%2Faslam-mac-QpmbWy5bwe4-unsplash.jpg?alt=media&token=a133e606-b974-47ff-81a8-a86584eed085',
      likes: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/dp-images%2Fbrijesh-reddy-8Um7bQlwBn8-unsplash.jpg?alt=media&token=3840525e-87e4-4db3-8052-8525ee62925e',
               }
            },
         ],
         totalCount: 1,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
      comments: {
         list: undefined,
         totalCount: 0,
      },
   },
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/dp-images%2Fbrijesh-reddy-8Um7bQlwBn8-unsplash.jpg?alt=media&token=3840525e-87e4-4db3-8052-8525ee62925e',
      },
      comments: {
         list: [
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
               },
               content: 'Hey there!!! How are you?',
            },
         ],
         totalCount: 1,
      },
      content: 'Hello world!',
      _id: '1fe99561-14f5-4596-b559-a129b52f810d',
      likes: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
               }
            },
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
               }
            },
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
               }
            },
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
               }
            },
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
               }
            },
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
               }
            },
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
               }
            },
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
               }
            },
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
               }
            },
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
               }
            },
         ],
         totalCount: 2,
      },
      createdAt: '2023-12-17T06:34:20.308Z',
   },
];

// const _desiredShape = {
//    message: 'Posts fetched successfully!',
//    success: true,
//    data: [
//       // desired data
//    ],
// };
