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
                    name: 'exnibition',
                    type: 'relationship',
                    relationTo: 'exhibitions',
                    hasMany: false,
                    admin: {
                        allowCreate: false,
                    }
                },
                {
                    name: 'photographer',
                    type: 'relationship',
                    relationTo: 'photographers',
                    hasMany: false,
                    admin: {
                        allowCreate: false,
                    }
                }
            ]
        },
        {
            name: 'streetview',
            type: 'text',
            validate: ({data}) => {
                console.log(data);
                return data.startsWith('https://');
            }
        },
        {
            name: 'hero',
            type: 'checkbox'
        }
    ]
}