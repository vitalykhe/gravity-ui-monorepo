import React from 'react';

import {createEvent, fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Tooltip} from '../Tooltip';

export function fireAnimationEndEvent(el: Node | Window, animationName = 'animation') {
    const ev = createEvent.animationEnd(el, {animationName});
    Object.assign(ev, {
        animationName,
    });

    fireEvent(el, ev);
}

test('should preserve ref on anchor element', () => {
    const ref = jest.fn();
    render(
        <Tooltip content="text">
            <button ref={ref} />
        </Tooltip>,
    );

    expect(ref).toHaveBeenCalledTimes(1);
});

test('should show tooltip on hover and hide on un hover', async () => {
    const user = userEvent.setup();

    render(
        <Tooltip content="test content">
            <button />
        </Tooltip>,
    );

    const button = await screen.findByRole('button');

    await user.hover(button);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();

    await user.unhover(button);

    fireAnimationEndEvent(tooltip);

    expect(tooltip).not.toBeInTheDocument();
});

test('should show tooltip on focus and hide on blur', async () => {
    const user = userEvent.setup();
    render(
        <Tooltip content="test content">
            <button />
        </Tooltip>,
    );

    const button = await screen.findByRole('button');

    await user.tab();
    expect(button).toHaveFocus();

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();

    await user.tab();

    fireAnimationEndEvent(tooltip);

    expect(button).not.toHaveFocus();
    expect(tooltip).not.toBeInTheDocument();
});

test('should hide on press Escape', async () => {
    const user = userEvent.setup();
    render(
        <Tooltip content="test content">
            <button />
        </Tooltip>,
    );

    const button = await screen.findByRole('button');

    await user.tab();
    expect(button).toHaveFocus();

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();

    await user.keyboard('[Escape]');

    fireAnimationEndEvent(tooltip);

    expect(button).toHaveFocus();
    expect(tooltip).not.toBeInTheDocument();
});

test('should show on focus and hide on un hover', async () => {
    const user = userEvent.setup();
    render(
        <Tooltip content="test content">
            <button />
        </Tooltip>,
    );

    const button = screen.getByRole('button');

    button.focus();

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();

    await user.hover(button);

    expect(tooltip).toBeVisible();

    await user.unhover(button);

    fireAnimationEndEvent(tooltip);

    expect(button).toHaveFocus();
    expect(tooltip).not.toBeInTheDocument();
});
