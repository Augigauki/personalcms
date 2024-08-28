import { ReactNode } from "react";

const AppLayout = ({children}: {children: ReactNode}) => {
    return(
        <body>
            {children}
        </body>
    )
}

export default AppLayout;