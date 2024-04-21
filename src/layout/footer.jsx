function Footer() {
    return <footer className ="page-footer
    indigo darken-1">
        <div class="footer-copyright">
            <div class="container">
            © {new Date().getFullYear()} 
            Чуменко Ярослав
            <a className="grey-text
             text-lighten-4 right"
              href="#!">Repository</a>
            </div>
          </div>
    </footer>
}

export {Footer};