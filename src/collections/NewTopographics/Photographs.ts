import { dashboardGroups } from "@/util/groups";
import { CollectionConfig } from "payload";

export const Photographs: CollectionConfig = {
    slug: 'photographs',
    upload: true,
    admin: {
        group: dashboardGroups.newtopo,
    },
    fields: [
        {
            name: 'location',
            type: 'text',
        },
        {
            name: 'year',
            type: 'number',
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'exhibition',
                    type: 'relationship',
                    relationTo: 'exhibitions',
                    hasMany: false,
                    admin: {
                        allowCreate: false,
                    },
                    index: true,
                },
                {
                    name: 'photographer',
                    type: 'relationship',
                    relationTo: 'photographers',
                    hasMany: false,
                    admin: {
                        allowCreate: false,
                    },
                    index: true,
                }
            ]
        },
        {
            name: 'streetview',
            type: 'text',
        },
        {
            name: 'hero',
            type: 'checkbox'
        }
    ]
}