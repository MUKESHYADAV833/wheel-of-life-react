import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';

<DragDropContext>
    <ul className="characters">
        <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    ...
                </li>
            )}
        </Draggable>
        <Droppable droppableId="characters">
            {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                    ...
                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
    </ul>
</DragDropContext>