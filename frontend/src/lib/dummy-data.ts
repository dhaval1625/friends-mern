import { IPost } from './definitions';

export const DUMMY_POSTS: IPost[] = [
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/dp-images%2Fbrijesh-reddy-8Um7bQlwBn8-unsplash.jpg?alt=media&token=3840525e-87e4-4db3-8052-8525ee62925e',
      },
      content: 'I am enjoying this app a lot!',
      _id: 'c634f507-64ac-47f4-9678-7f4c280e6b97fa',
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
      author: {
         name: 'Drashti Solanki',
         _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
      },
      content: 'Mesmerizing view out there!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c07ew',
      img: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/post-images%2Faslam-mac-QpmbWy5bwe4-unsplash.jpg?alt=media&token=a133e606-b974-47ff-81a8-a86584eed085',
      likes: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/dp-images%2Fbrijesh-reddy-8Um7bQlwBn8-unsplash.jpg?alt=media&token=3840525e-87e4-4db3-8052-8525ee62925e',
               },
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
      _id: '1fe99561-14f5-4596-b559-a129b52f810dxcv',
      likes: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://firebasestorage.googleapis.com/v0/b/friends-c2500.appspot.com/o/dp-images%2Fbrijesh-reddy-8Um7bQlwBn8-unsplash.jpg?alt=media&token=3840525e-87e4-4db3-8052-8525ee62925e',
               },
            },
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
               },
            },
         ],
         totalCount: 2,
      },
      createdAt: '2023-12-17T06:34:20.308Z',
   },
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: 'I am enjoying this app a lot!',
      _id: 'c634f507-64ac-47f4-9678-7f4c280e6b97',
      createdAt: '2023-12-17T06:47:48.205Z',
      likes: {
         list: [
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
                  dp: 'https://randomuser.me/api/portraits/women/2.jpg',
               },
            },
            {
               author: {
                  _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
                  name: 'Samantha Johnson',
                  dp: 'https://randomuser.me/api/portraits/women/3.jpg',
               },
            },
         ],
         totalCount: 2,
      },
      comments: {
         list: [
            {
               author: {
                  _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
                  name: 'Drashti Solanki',
                  dp: 'https://randomuser.me/api/portraits/women/2.jpg',
               },
               content: 'Great to hear that!',
            },
            {
               author: {
                  _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
                  name: 'Samantha Johnson',
                  dp: 'https://randomuser.me/api/portraits/women/3.jpg',
               },
               content: 'Enjoy every moment!',
            },
         ],
         totalCount: 2,
      },
   },
   {
      author: {
         _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
         name: 'Drashti Solanki',
         dp: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: 'Mesmerizing view out there!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c07',
      img: 'https://picsum.photos/id/1015/600/400',
      likes: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://randomuser.me/api/portraits/women/1.jpg',
               },
            },
         ],
         totalCount: 1,
      },
      comments: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://randomuser.me/api/portraits/women/1.jpg',
               },
               content: 'Beautiful indeed!',
            },
         ],
         totalCount: 1,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
         name: 'Samantha Johnson',
         dp: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      content: 'Just another day at the beach!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c08',
      img: 'https://picsum.photos/id/1016/600/400',
      likes: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://randomuser.me/api/portraits/women/1.jpg',
               },
            },
         ],
         totalCount: 1,
      },
      comments: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://randomuser.me/api/portraits/women/1.jpg',
               },
               content: 'Looks peaceful!',
            },
         ],
         totalCount: 1,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: 'Another adventure begins!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c09',
      img: 'https://picsum.photos/id/1018/600/400',
      likes: {
         list: [
            {
               author: {
                  _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
                  name: 'Samantha Johnson',
                  dp: 'https://randomuser.me/api/portraits/women/3.jpg',
               },
            },
         ],
         totalCount: 1,
      },
      comments: {
         list: [
            {
               author: {
                  _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
                  name: 'Samantha Johnson',
                  dp: 'https://randomuser.me/api/portraits/women/3.jpg',
               },
               content: 'Exciting!',
            },
         ],
         totalCount: 1,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
         name: 'Drashti Solanki',
         dp: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: 'Feeling blessed!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c10',
      img: 'https://picsum.photos/id/1020/600/400',
      likes: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://randomuser.me/api/portraits/women/1.jpg',
               },
            },
            {
               author: {
                  _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
                  name: 'Samantha Johnson',
                  dp: 'https://randomuser.me/api/portraits/women/3.jpg',
               },
            },
         ],
         totalCount: 2,
      },
      comments: {
         list: [
            {
               author: {
                  _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
                  name: 'Alina Markova',
                  dp: 'https://randomuser.me/api/portraits/women/1.jpg',
               },
               content: 'Stay blessed!',
            },
         ],
         totalCount: 1,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
         name: 'Samantha Johnson',
         dp: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      content: 'New day, new possibilities!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c11',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: 'Cherish every moment!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c12',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
         name: 'Drashti Solanki',
         dp: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: 'Sunset vibes!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c13',
      img: 'https://picsum.photos/id/1022/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
         name: 'Samantha Johnson',
         dp: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      content: 'Embracing nature!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c14',
      img: 'https://picsum.photos/id/1023/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: 'Exploring new horizons!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c15',
      img: 'https://picsum.photos/id/1024/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
         name: 'Drashti Solanki',
         dp: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: 'Another beautiful day!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c16',
      img: 'https://picsum.photos/id/1025/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
         name: 'Samantha Johnson',
         dp: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      content: 'Adventures await!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c17',
      img: 'https://picsum.photos/id/1026/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '853fdbc2-8c31-4c6a-9041-1cca3ba50142',
         name: 'Alina Markova',
         dp: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: 'Enjoying the journey!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c18',
      img: 'https://picsum.photos/id/1027/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: 'b82390d3-7eb4-4fae-8cb4-fd9af22c9990',
         name: 'Drashti Solanki',
         dp: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: 'Living life to the fullest!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c19',
      img: 'https://picsum.photos/id/1028/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
   {
      author: {
         _id: '4a11526a-5e2e-4f20-8e16-5c51f2ac57e7',
         name: 'Samantha Johnson',
         dp: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      content: 'Capturing memories!',
      _id: '3b7dd777-5d11-4dac-9c6c-edf36cd51c20',
      img: 'https://picsum.photos/id/1029/600/400',
      likes: {
         list: [],
         totalCount: 0,
      },
      comments: {
         list: [],
         totalCount: 0,
      },
      createdAt: '2023-12-17T06:35:58.307Z',
   },
];

// const _desiredShape = {
//    message: 'Posts fetched successfully!',
//    success: true,
//    data: [
//       // desired data
//    ],
// };
