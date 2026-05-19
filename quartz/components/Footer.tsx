import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((_opts?: Options) => {
  const Footer: QuartzComponent = () => null
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
