var users_data = [{
  id: 1,
  name: "Leanne Graham"
}, {
  id: 2,
  name: "Ervin Howell"
}, {
  id: 3,
  name: "Clementine Bauch"
}];


// model and collection constructors set to manually add id properties
var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
  initialize: function() {
    if (!this.get("id")) {
      this.set("id", this.collection.nextID());
    }
  }
});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts",
  last_id: 0,
  setLastID: function() {
    if (this.isEmpty()) { return; }

    this.last_id = this.last().get("id");
  },
  nextID: function() {
    return ++this.last_id;
  },
  initialize: function() {
    this.on("sync", this.setLastID);
  }
});

// fetch collection data from server
var blog_roll = new Posts();
blog_roll.fetch({
  success: function(collection) {
    console.log(collection.toJSON());
  }
});

// create model and collections for the blog authors
var User = Backbone.Model.extend({});
var Users = Backbone.Collection.extend({
      model: User
    });
var blog_authors;

// set blog_authors  to users_data object
blog_authors = new Users();
blog_authors.reset(users_data);

// update the model with an id of 1 in the blog_roll collection
blog_roll.set({
  id: 1,
  userId: 1,
  title: "My First Post",
  body: "This is my first blog post! Yay!"
});

var first_post = blog_roll.get(1);
console.log(first_post.toJSON());

// auto generate id from server using add and save()
var new_post = blog_roll.add({
  title: "My New Blog Post",
  body: "This is my latest blog post. I hope you like it!",
  userID: 1
});

new_post.save();

// after the request completes
console.log(new_post.get("id"));

// create method is like using add and save together
var new_post = blog_roll.create({
  title: "My New Blog Post",
  body: "This is my latest blog post. I hope you like it!",
  userID: 1
});

// after the request completes
console.log(new_post.get("id"));

// use where to return models that match an object
var posts_by_author_1 = blog_roll.where({ userId: 1 });

// using comparator property to sort a collection
console.log(blog_roll.first().toJSON()); // id: 1
blog_roll.comparator = "title";
blog_roll.sort();
console.log(blog_roll.first().toJSON()); // id: 30

