// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pHEc37smer1Q6xynjofQze
// Component: qQDmv-FaPz2qGj
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_planty.module.css" // plasmic-import: pHEc37smer1Q6xynjofQze/projectcss
import * as sty from "./PlasmicLinkButton.module.css" // plasmic-import: qQDmv-FaPz2qGj/css

export const PlasmicLinkButton__VariantProps = new Array("type", "size")

export const PlasmicLinkButton__ArgProps = new Array("href", "text")

function PlasmicLinkButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const $props = props.args
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootsize_small]: hasVariant(variants, "size", "small"),
          [sty.roottype_blankGray]: hasVariant(variants, "type", "blankGray"),
          [sty.roottype_blankOrange]: hasVariant(
            variants,
            "type",
            "blankOrange"
          ),

          [sty.roottype_outlineGray]: hasVariant(
            variants,
            "type",
            "outlineGray"
          ),

          [sty.roottype_solidGray]: hasVariant(variants, "type", "solidGray"),
          [sty.roottype_solidOrange]: hasVariant(
            variants,
            "type",
            "solidOrange"
          ),
        }
      )}
      component={Link}
      href={args.href !== undefined ? args.href : "#"}
      platform={"gatsby"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Do the thing",
        value: args.text,
        className: classNames(sty.slotTargetText, {
          [sty.slotTargetTexttype_blankGray]: hasVariant(
            variants,
            "type",
            "blankGray"
          ),

          [sty.slotTargetTexttype_blankOrange]: hasVariant(
            variants,
            "type",
            "blankOrange"
          ),

          [sty.slotTargetTexttype_outlineGray]: hasVariant(
            variants,
            "type",
            "outlineGray"
          ),

          [sty.slotTargetTexttype_solidGray]: hasVariant(
            variants,
            "type",
            "solidGray"
          ),

          [sty.slotTargetTexttype_solidOrange]: hasVariant(
            variants,
            "type",
            "solidOrange"
          ),
        }),
      })}
    </p.PlasmicLink>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps,
    })

    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton"
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`
  }
  return func
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps,
  }
)

export default PlasmicLinkButton
/* prettier-ignore-end */