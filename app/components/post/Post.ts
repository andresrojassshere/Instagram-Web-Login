enum PostAttributes {
  username = "username",
  userpic = "userpic",
  userpostpic = "userpostpic",
  location = "location",
  likes = "likes",
  postcaption = "postcaption",
  commentuser = "commentuser",
  commentuser2 = "commentuser2",
  comment = "comment",
  comment2 = "comment2",
  posttime = "posttime",
}

class Post extends HTMLElement {
  username = "";
  userpic = "";
  userpostpic = "";
  location = "";
  likes = "";
  postcaption = "";
  commentuser = "";
  comment = "";
  commentuser2 = "";
  comment2 = "";
  posttime = "";

  static get observedAttributes(): PostAttributes[] {
    return Object.keys(PostAttributes) as PostAttributes[];
  }

  attributeChangedCallback(
    prop: PostAttributes,
    _: string,
    newValue: string
  ): void {
    this[prop] = newValue;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    this.render();
  }

  render(): void {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/components/post/post.css"
            <div class="container">
                <div class="left_column">
                    <div class="post">
                        <div class="post_header">
                            <div class="user">
                                <div class="profile_pic"> <img src="${this.userpic}"> </div>
                                <p class="username"> ${this.username}</p>
                            </div>
                            <img src="images/post/moreicon.png" class="more_icon">
                        </div>
                        <img src="${this.userpostpic}" class="image_post">
                        <div class="post_elements">
                            <div class="icons_organization">
                                    <div class="interaction_icons">
                                    <img src="images/post/likeicon.png" class="icon">
                                    <img src="images/post/commentsicon.png" class="icon">
                                    <img src="images/post/sendicon.png" class="icon">
                                </div>
                                <div> 
                                    <img src="images/post/saveicon.png" class="save_icon">
                                </div>
                            </div>
                            <p class="likes"> ${this.likes} likes </p>
                            <p class="description"> <b> ${this.username} </b> ${this.postcaption}</p>
                            <p class="view_comments"> View all comments </p>

                            <div class="intento"> 
                                <div>
                                    <p class="comments"> <b> ${this.commentuser} </b>  ${this.comment} </p>
                                </div>
                                <img src="images/post/not_liked.png"  class="likecomments"> 
                            </div>
                        
                            <div class="intento"> 
                                <div>
                                    <p class="comments"> <b> ${this.commentuser2} </b>  ${this.comment2} </p>
                                </div>
                                <img src="images/post/not_liked.png"  class="likecomments"> 
                            </div>
                        </div>
                        <div class="comments_container">
                            <img src="images/post/smileicon.png" class="smile_icon">
                            <input type="text" class="comment_box" placeholder="Add a comment">
                            <button class ="comment_button">post</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("my-post", Post);
export default Post;
