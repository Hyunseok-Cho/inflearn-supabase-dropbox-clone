'use client'

import { deleteFile } from "@/actions/storageActions"
import { queryClient } from "@/config/ReactQueryClientProvider"
import { getImageUrl } from "@/utils/supabase/storage"
import {IconButton, Spinner} from "@material-tailwind/react"
import { useMutation } from "@tanstack/react-query"

// @ts-ignore
export default function DropboxImage({image}) {

    const deleteFileMutation = useMutation({
        mutationFn: deleteFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["images"],
            })
        }
    })

    return(
        <div className="relative w-full flex flex-col p-4 border border-gray-100 rounded-2xl shadow-md">
            <div>
                <img src={getImageUrl(image.name)} className="w-full aspect-square rounded-2xl" />
            </div>

            <div>
                {image.name}
            </div>

            <div className="absolute top-4 right-4">
                <IconButton
                onClick={()=>{
                    deleteFileMutation.mutate(image.name);
                }}
                color="red">
                    {
                        deleteFileMutation.isPending ? (
                            <Spinner />
                        ) : (
                            <i className="fas fa-trash" />
                        )
                    }
            </IconButton>
            </div>
        </div>
    )
}