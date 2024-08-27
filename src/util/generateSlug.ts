import { FieldHook } from "payload";
import slugify from "slugify";

export const generateSlug: FieldHook = async({value, data}) => {
    let slug;
    if(data?.name){
        slug = slugify(data?.name, {
            lower: true,
            locale: 'nb_no'
        }) ?? value;
        return slug;
    }
    if(data?.title){
        slug = slugify(data?.title, {
            lower: true,
        }) ?? value;
        return slug;
    }
}