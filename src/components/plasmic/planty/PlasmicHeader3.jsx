// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pHEc37smer1Q6xynjofQze
// Component: H-iy64raaXQNqw
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import MenuButton from "../../MenuButton" // plasmic-import: CtOGPAYYB9Obua/component
import IconLink from "../../IconLink" // plasmic-import: _hIENuO1SpcnPD/component
import { useScreenVariants as useScreenVariantsv5FSi0UE2M7YwV } from "./PlasmicGlobalVariant__Screen" // plasmic-import: V5fSI0uE2M7ywV/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_planty.module.css" // plasmic-import: pHEc37smer1Q6xynjofQze/projectcss
import * as sty from "./PlasmicHeader3.module.css" // plasmic-import: H-iy64raaXQNqw/css
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg" // plasmic-import: PUJ-tMkxMFdh63/icon
import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: IIn6MGA5PzbO9M/icon

export const PlasmicHeader3__VariantProps = new Array()

export const PlasmicHeader3__ArgProps = new Array()

function PlasmicHeader3__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const $props = props.args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsv5FSi0UE2M7YwV(),
  })

  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          className={classNames("__wab_instance", sty.menuButton)}
        />
      ) : null}

      <LogoWhitesvgIcon
        className={classNames(projectcss.all, sty.svg__scvCp)}
        role={"img"}
      />

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vrlgK)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__jcbjx
            )}
            component={Link}
            href={"/store"}
            platform={"gatsby"}
          >
            {"Store"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___9N6Z
            )}
            component={Link}
            href={"/about"}
            platform={"gatsby"}
          >
            {"About"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__is0U
            )}
            component={Link}
            href={"/faq"}
            platform={"gatsby"}
          >
            {hasVariant(globalVariants, "screen", "mobile") ? "Faq" : "Faq"}
          </p.PlasmicLink>
        </p.Stack>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__cXi9J)}
      >
        <IconLink
          data-plasmic-name={"iconLink"}
          data-plasmic-override={overrides.iconLink}
          className={classNames("__wab_instance", sty.iconLink)}
          icon={
            <React.Fragment>
              <IconIcon
                className={classNames(projectcss.all, sty.svg__rYa1)}
                role={"img"}
              />

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"0"}
              </div>
            </React.Fragment>
          }
        />
      </p.Stack>
    </p.Stack>
  ) : null
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader3__ArgProps,
      internalVariantPropNames: PlasmicHeader3__VariantProps,
    })

    return PlasmicHeader3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader3"
  } else {
    func.displayName = `PlasmicHeader3.${nodeName}`
  }
  return func
}

export const PlasmicHeader3 = Object.assign(
  // Top-level PlasmicHeader3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader3
    internalVariantProps: PlasmicHeader3__VariantProps,
    internalArgProps: PlasmicHeader3__ArgProps,
  }
)

export default PlasmicHeader3
/* prettier-ignore-end */
