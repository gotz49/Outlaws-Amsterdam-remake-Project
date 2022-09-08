import SocialNetworks from "../img/SocialNetworks.png";


function Footer() {
  return (
    <div className="footer">
      <section>
        <article className="footerInner">
          <div className="footerInfo">
            <h2>ABOUT OUTLAWS AMSTERDAM</h2>
            <div>
              <p>Welcome to Outlaws Amsterdam. The place where style meets your inner Outlaw.</p>
              <p>If evolution is outlawed, only outlaws will evolve.</p>
            </div>
            <ul>
              <img src={SocialNetworks} alt="socialnetworks" />
            </ul>
          </div>

          <div className="footerHelp">
            <h2>NEED HELP?</h2>
            <ul>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </ul>
          </div>

          <div className="footerNewsletter">
            <h2>BECOME AN OUTLAW</h2>
            <p></p>
            <form>
              <input type="email" />
              <button disabled></button>
            </form>
          </div>
        </article>

        <aside className="footerAside">
          <div>
            <p></p>
            <p></p>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Footer;
