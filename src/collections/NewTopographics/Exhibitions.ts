import { generateSlug } from "@/util/generateSlug";
import { dashboardGroups } from "@/util/groups";
import { CollectionConfig, FieldHook } from "payload";
import slugify from "slugify";
import { Photographs } from "./Photographs";

export const Exhibitions: CollectionConfig = {
    slug: 'exhibitions',
    admin: {
        group: dashboardGroups.newtopo,
        useAsTitle: 'title',
        defaultColumns: ['title'],
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'slug',
                    type: 'text',
                    hooks: {
                        beforeValidate: [generateSlug]
                    },
                    admin: {
                        readOnly: true,
                    }
                }
            ]
        },
        {
            name: 'introText',
            type: 'textarea',
          },
          {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'photographs',
          },
          {
            name: 'photos',
            type: 'array',
            fields: [
              {
                name: 'photo',
                type: 'upload',
                relationTo: 'photographs'
              },
              /* {
                name: 'title',
                type: 'text',
              }, */
            ],
          },
    ]
}