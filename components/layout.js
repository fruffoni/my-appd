import style from "@/components/layout.module.css"

export default function layout({children}){
    return<div className={style.container}>{children}</div>
}