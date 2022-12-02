var PostAttributes;
(function (PostAttributes) {
    PostAttributes["username"] = "username";
    PostAttributes["userpic"] = "userpic";
    PostAttributes["userpostpic"] = "userpostpic";
    PostAttributes["location"] = "location";
    PostAttributes["likes"] = "likes";
    PostAttributes["postcaption"] = "postcaption";
    PostAttributes["commentuser"] = "commentuser";
    PostAttributes["commentuser2"] = "commentuser2";
    PostAttributes["comment"] = "comment";
    PostAttributes["comment2"] = "comment2";
    PostAttributes["posttime"] = "posttime";
})(PostAttributes || (PostAttributes = {}));
class Post extends HTMLElement {
    constructor() {
        super();
        this.username = "";
        this.userpic = "";
        this.userpostpic = "";
        this.location = "";
        this.likes = "";
        this.postcaption = "";
        this.commentuser = "";
        this.comment = "";
        this.commentuser2 = "";
        this.comment2 = "";
        this.posttime = "";
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return Object.keys(PostAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
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
