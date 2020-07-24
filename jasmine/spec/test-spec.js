

//xdescribe('on button pressed when game is off', () => {

  //   beforeEach(function () {
    //        on = false;
      //      spyEvent = spyOn($('#power'), 'click')
        //})

    //describe('display light', () => {
      //  it('should have class lightOn', () => {
        //    $('#power').click();
          //  expect($(onButton)).toHaveClass('onLight')
        //})
    //})
    //describe('game buttons should flash', () => {
      //  it('should run flashcolour function', () => {
        //    $('#power').click();
          //  spyOn(window, 'flashColour')
            //expect(window.flashColour).toHaveBeenCalled();
        //})
    //})  
//})

describe('start button', () => {
        it('should not run play function if power is off', () => {
            spyOn(window, 'play');
            $(startButton).click();
            expect(window.play).not.toHaveBeenCalled();
        })

        it('should run play function if power is on', () => {
            spyOn(window, 'play');
            $(onButton).click();
            $(startButton).click();
            expect(window.play).toHaveBeenCalled();
        })
    })

describe('how to play modal', () => {
    it('should open modal when HTP button is clicked', () => {
        spyOn($('#HTP'), 'click');
        $('#HTP').click();
        expect($('#rules-modal')).toHaveCss({display: 'block'});
    })
})