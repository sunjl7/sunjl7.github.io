var posts=["2024/11/01/更新模板后的文章/","2024/11/01/这是一篇新的博文/","2024/11/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };