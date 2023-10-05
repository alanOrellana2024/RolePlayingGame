class charanters extends enemies{
    constructor(props){
        super(props);
        const {strenght, endurance,  enhancedEbility=[], kind} = props;
        this.strenght = strenght;
        this.endurance = endurance;
        this.enhancedEbility = enhancedEbility;
        this.kind = kind;
    }
}