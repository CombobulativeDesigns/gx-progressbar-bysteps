function ProgressBarBySteps($) {
    this.Steps;

    this._currentStep = 0;

    this.show = function () {
        let container = $("#" + this.ContainerName);

        this._renderControl(container);
        this._initiateState();
    }

    this.Next = function() {
        if (this._currentStep !== 0) {
            if (this._currentStep < this.Steps) {
                this._currentStep++;
                this._setState();
            }
        }
    }

    this.Previous = function() {
        if (this._currentStep !== 0) {
            if (this._currentStep > 1) {
                this._currentStep--;
                this._setState();
            }
        }
    }

    this._setState = function () {
        let value;
        let element;
        for (var i = 1; i <= this.Steps; i++) {
            value = (i <= this._currentStep) ? "green" : "#999";
            element = $("#gxrj-pbby-elem-"+i);
            (element !== undefined) && element.children().first().css("background-color", value);

            value = (i <= this._currentStep) ? "100%" : "0%";
            element = $("#gxrj-pbby-mid-"+i);
            element.children().first().children().first().css("width", value);
        }
    }

    this._initiateState = function () {
        this._currentStep = 1;
        this._setState();
    }

    this._renderControl = function (container) {
        container.css("width", "100%");

        let wrapper = $(document.createElement('div'));
        wrapper.css("color", "white");
        wrapper.css("font-size", "1.25em");
        wrapper.css("font-weight", "bold");
        wrapper.css("padding", "0.5em");
        wrapper.css("display", "flex");
        wrapper.css("flex-direction", "row");
        wrapper.css("flex-wrap", "nowrap");
        wrapper.css("align-items", "center");
        wrapper.css("align-content", "center");
        wrapper.css("justify-content", "space-evenly");

        let barStepTemplate = $(document.createElement('div'));
        barStepTemplate.css("flex-grow", "0");
        barStepTemplate.css("flex-shrink", "0");

        let barStepTemplateElement = $(document.createElement('div'));
        barStepTemplateElement.css("background-color", "#999");
        barStepTemplateElement.css("width", "1.5em");
        barStepTemplateElement.css("height", "1.5em");
        barStepTemplateElement.css("border-radius", "0.75em");
        barStepTemplateElement.css("display", "flex");
        barStepTemplateElement.css("justify-content", "center");
        barStepTemplateElement.css("align-items", "center");
        barStepTemplateElement.css("transition", "background-color 1s linear");

        let barStepTemplateSpan = $(document.createElement('span'));

        barStepTemplateElement.append(barStepTemplateSpan);
        barStepTemplate.append(barStepTemplateElement);

        let barMidStepTemplate = $(document.createElement('div'));
        barMidStepTemplate.css("flex-grow", "1");
        barMidStepTemplate.css("flex-shrink", "1");

        let barMidStepTemplateElement = $(document.createElement('div'));
        barMidStepTemplateElement.css("height", "0.5em");
        barMidStepTemplateElement.css("background-color", "#999");
        barMidStepTemplateElement.css("margin", "0 -0.1em");
        barMidStepTemplateElement.css("display", "flex");
        barMidStepTemplateElement.css("flex-direction", "row");
        barMidStepTemplateElement.css("justify-content", "flex-start");

        let barMidStepTemplateFill = $(document.createElement('div'));
        barMidStepTemplateFill.css("height", "100%");
        barMidStepTemplateFill.css("width", "0%");
        barMidStepTemplateFill.css("background-color", "green");
        barMidStepTemplateFill.css("transition", "width 1s linear");

        barMidStepTemplateElement.append(barMidStepTemplateFill);
        barMidStepTemplate.append(barMidStepTemplateElement);

        let barStep = barStepTemplate.clone();
        barStep.children().first().children().first().append("1");
        barStep.attr("id", "gxrj-pbby-elem-1");
        wrapper.append(barStep);

        let midStep;

        for (var i = 2; i <= this.Steps; i++) {
            midStep = barMidStepTemplate.clone();
            midStep.attr("id", "gxrj-pbby-mid-"+i);
            wrapper.append(midStep);

            barStep = barStepTemplate.clone()
            barStep.children().first().children().first().append(i);
            barStep.attr("id", "gxrj-pbby-elem-"+i);
            wrapper.append(barStep);
        }

        container.append(wrapper);
    }
}