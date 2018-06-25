//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    //% blockId="trunLeft" block="trunLeft"
    //% blockGap=0 weight=0 blockExternalInputs=true
    export function trunLeft () {
        if (input.acceleration(Dimension.X) < -100) {
          return ture;
        }
    }
    //% blockId="trunRight" block="trunRight"
    //% blockGap=0 weight=0
    export function trunRight () {
        if (input.acceleration(Dimension.X) > 100) {
          return ture;
        }
    }
}
