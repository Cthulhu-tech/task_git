import { PagenationContainer, ResultContainer } from "./resultStyle";
import { useNavigate, useSearchParams } from "react-router-dom";
import { dataFetch } from "../../store/asyncActions/dataForks";
import { DataView } from "../../components/dataView/dataView";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { urlParams } from "../../type/type";
import { Button, Image, Paragraph } from "../../style/mixin";
import { AllDataType, ForksData } from "../../interface/interaface";
import { ContainerInfo } from "../../components/dataView/dataVIewStyle";
import { LocalStorage } from "../../components/localstorage/localstorage";
import { Pagination } from "../../utils/pageGenerator";

export const ResultPage = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [load, setLoad] = useState(true);
    const [searchParams] = useSearchParams();
    const owner = searchParams.get("owner");
    const page = Number(searchParams.get("page"));
    const repository = searchParams.get("repository");
    const data  = useSelector((state:{dataLoad: ForksData, linkGet: {link: string}}) => state);

    const nextPage = () => {
        if(page && owner && repository && Number(data.linkGet.link) > page)
            PageSwiting(page + 1);
    }

    const prevPage = () => {
        if(page && owner && repository && page > 1)
            PageSwiting(page - 1);
    }

    const PageSwiting = (PageConvert:number) => {

        const page = PageConvert.toString();
        if(page && owner && repository){
            NavigateGenerator({owner, repository, PageConvert: page});
            dispatch(dataFetch({owner, repository, PageConvert: page}));
        }
    }

    const NavigateGenerator = (url: urlParams) => {
        navigate(`/result?page=${url.PageConvert}&owner=${url.owner}&repository=${url.repository}`);
    }

    const onPressPage = (numberPage: number | string) => {
        if(page && owner && repository){
            NavigateGenerator({owner, repository, PageConvert: numberPage.toString()});
            dispatch(dataFetch({owner, repository, PageConvert: numberPage.toString()}));
        }
    }

    const PageEterable = () => {
        
        const last = Number(data.linkGet.link);

        return  <>{
                    [...Pagination(1, last)].map((page:number | string) => {
                    return  <Button
                                key={page}
                                onClick={() => page !== '...' && onPressPage(page)}
                                props={{color: "black", width: 60, height: 40, background: "#f8f8f8", border: "#d3d3d3"}}
                            >{page}</Button>
                    })
                }</>

    }

    const Pagenation = useCallback(() => {

        const last = Number(data.linkGet.link)

        return  <PagenationContainer>
                    {page > 1 &&
                    <Button
                        className={page <= 1 ? 'btn-error' : ''}
                        onClick={prevPage}
                        props={{color: "black", width: 60, height: 40, background: "#f8f8f8", border: "#d3d3d3"}}
                    >{"<"}</Button>}
                    <PageEterable/>
                    {last >= page &&
                    <Button
                        onClick={nextPage}
                        props={{color: "black", width: 60, height: 40, background: "#f8f8f8", border: "#d3d3d3"}}
                    >{">"}</Button>}

                </PagenationContainer>

    },[data]);

    const FirstLoadData = () => {

        setLoad(false);
        if(page && owner && repository){
            dispatch(dataFetch({owner, repository, PageConvert: `${page}`}));
        }

    }

    const NotFound = () => {

        return  <ContainerInfo>
                    <Paragraph props={{size: 16}}>This page was not found</Paragraph>
                    <Image props={{width: 250}} src="./image/error.png"/>
                </ContainerInfo>

    }

    useEffect(() => {
        console.log(data.linkGet.link)
        if(load)
            FirstLoadData();

    },[data, searchParams]);

    return  <>
            <ResultContainer>
                <LocalStorage/>
                {page > 0 ? <DataView/> : <NotFound/>}
            </ResultContainer>
            {page > 0 && (data.dataLoad.data as AllDataType[]).length > 0 && data.dataLoad.load  && <Pagenation/>}
            </>

}