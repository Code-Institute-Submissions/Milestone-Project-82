

describe('on button', () => {

    beforeEach(() => {
    on = false;
    });

    it('should turn on display light', () => {
    spyOn($('#power'), 'click');
    $('#power').click();
    expect($('#onLight')).toHaveClass('lightOn');
});
})