class SubmitPost extends HTMLElement {
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
          <link rel="stylesheet" href="./components/SubmitPost/SubmitPost.css" type="text/css" >
          <article>
            <section>
              <div class="container">
                <p class="title">New Post</p>
                <div class="sub-container">
                <div> 
                  <form>
                  <div>
                    <input name="titulo"/ placeholder="   Write a caption..." class="caption">
                  </div>
                  <div class="image-info">
                    <img src="images/submitpost/image.png"  class="icons">
                    <p class="subtitle"> Add image: </p>
                    <input name="Imagen" / placeholder="   Copy link here..." class="image"></input>
                  </div>
                  <div class="location-info">
                    <img src="images/submitpost/location.png"  class="icons">
                    <p class="subtitle"> Add location: </p>
                    <input name="descripcion" / placeholder="   Write here..." class="location">
                  </div>
                  <div class="share-container">
                    <button type="submit" class="share">Share</button>
                  </div>
                </div>
              </div>
            </section>
          </article>
          `;
  }
}

customElements.define("my-submit-post", SubmitPost);
export default SubmitPost;
