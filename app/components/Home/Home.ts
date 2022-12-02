import "../index.js";

export class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/styles.css"/>
        <app-post-form> </app-post-form>
        <my-header username="andresrojassshere"> </my-header>
            <section class="main"> 
                <div class="container">
                    <div class="left_column">
                        <div class="histories_container">
                        <my-histories 
                            userpic="./images/histories/sofia-profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/kirsten_profile.png",
                            username="kirstendunst"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/josh_profile.png",
                            username="joshhartnett"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/leslie_profile.png",
                            username="leslielisbon"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/therese-profile.png",
                            username="thereselisbon"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/hannah-profile.png",
                            username="hannahhall"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/mary-profile.png",
                            username="marylisbon"
                        > </my-histories>
                        </div>
                        <div>
                            <my-submit-post></my-submit-post>
                        </div>
                        <div>
                            <my-post username="sofiacoppola"
                                location="Detroit, Michigan"
                                userpic="./images/post/sofia_profile.png"
                                userpostpic="./images/post/sofia_post.png"
                                likes=707
                                postcaption="I’m happy that it has had a second life, and it makes me glad that girls of other generations connect to it and find something in it… It didn’t have much of a life at the time it came out. ❧ "
                                commentuser="kirstendunst"
                                comment="i miss this you!!"
                                commentuser2="lesliehayman"
                                comment2="luv u!!"
                                posttime="3"
                            > </my-post>

                            <my-post username="kirstendunst"
                                location="Detroit, Michigan"
                                userpic="./images/post/kirsten_profile.png"
                                userpostpic="./images/post/kirsten_post.png"
                                likes=231
                                postcaption="When I read the script, I was a little bit nervous because I was making out with all these guys in the script, and I just was overwhelmed and kind of a young 16-year-old, but when I met Sofia, I felt at ease, and I knew that this would be something special."
                                commentuser="hannahhall"
                                comment="i miss filming this!!"
                                commentuser2="joshharnett"
                                comment2="best cast ever lol"
                                posttime="30"
                            > </my-post>

                            <my-post username="hannahhall"
                                location="Detroit, Michigan"
                                userpic="./images/post/hannah_profile.png"
                                userpostpic="./images/post/sofia_post2.png"
                                likes=231
                                postcaption="I think the dreamy aspect of it and the way that Sofia filmed it, it really struck a deep chord in people's psyches. When people who are our age and our generation talk about it, and when younger people talk about it, it's a very defining film for them. ✞❦"
                                commentuser="kirstendunst"
                                comment="till death tear us apart ✿"
                                commentuser2="joshhartnett"
                                comment2="fav family"
                                posttime="15"
                            > </my-post>
                        </div>
                    </div>

                    <div class="right_column">
                        <p class="suggestions">Suggestions For You</p>
                        <my-suggestion  
                            suggestionusername = "charlotte" 
                            suggestionfollowtoo="sofiacoppola and 12 others"
                            suggestionuserpic="./images/suggestions/charlotte.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "marieantoinette" 
                            suggestionfollowtoo="kirstendunst and 65 others"
                            suggestionuserpic="./images/suggestions/marie.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "bobharris" 
                            suggestionfollowtoo="sofiacoppola and 6 others"
                            suggestionuserpic="./images/suggestions/bob.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "kinglouisxvi" 
                            suggestionfollowtoo="kirstendunst and 54 others"
                            suggestionuserpic="./images/suggestions/king.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "gabrielle" 
                            suggestionfollowtoo="sofiacoppola and 14 others"
                            suggestionuserpic="./images/suggestions/gabrielle.png"
                        > </my-suggestion>
                    </div>
                </div>
            </section>
        `;
  }
}

customElements.define("app-home", Home);
