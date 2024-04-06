import {
    mutation,
  } from "./_generated/server";

  import { fileTypes } from "./schema";
  import { ConvexError, v } from "convex/values";


  export async function hasAccessToOrg(
    // ctx: QueryCtx | MutationCtx,
    orgId: string
  ) {
    // const identity = await ctx.auth.getUserIdentity();
  
    // if (!identity) {
    //   return null;
    // }
  
    // const user = await ctx.db
    //   .query("users")
    //   .withIndex("by_tokenIdentifier", (q) =>
    //     q.eq("tokenIdentifier", identity.tokenIdentifier)
    //   )
    //   .first();
  
    // if (!user) {
    //   return null;
    // }
  
    // const hasAccess =
    //   user.orgIds.some((item) => item.orgId === orgId) ||
    //   user.tokenIdentifier.includes(orgId);
  
    // if (!hasAccess) {
    //   return null;
    // }
  
    return {  };
  }
  
  export const createFile = mutation({
    args: {
      name: v.string(),
      fileId: v.id("_storage"),
      orgId: v.string(),
      type: fileTypes,
    },
    async handler(ctx, args) {
      const hasAccess = await hasAccessToOrg(ctx, args.orgId);
  
      if (!hasAccess) {
        throw new ConvexError("you do not have access to this org");
      }
  
      await ctx.db.insert("files", {
        name: args.name,
        orgId: args.orgId,
        fileId: args.fileId,
        type: args.type,
        userId: hasAccess.user._id,
      });
    },
  });