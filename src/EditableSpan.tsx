import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import {TextField} from '@material-ui/core';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = memo((props: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = useCallback(() => {
        setEditMode(false);
        props.onChange(title);
    }, [props.onChange])
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
})
