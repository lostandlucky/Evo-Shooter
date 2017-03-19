var target : Transform;
var distance = 10.0;

// ZoomCameraMouse
var MouseWheelSensitivity = 5;
var MouseZoomMin = 1;
var MouseZoomMax = 7;

var xSpeed = 250.0;
var ySpeed = 120.0;

var yMinLimit = -20;
var yMaxLimit = 80;

private var x = 0.0;
private var y = 0.0;

var rotation;
var position;

var smoothTime = 0.3;

private var xSmooth = 0.0;
private var ySmooth = 0.0; 
private var xVelocity = 0.0;
private var yVelocity = 0.0;

private var posSmooth = Vector3.zero;
private var posVelocity = Vector3.zero;

function Start () {
   
    Cursor.visible = true;

    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;

    // Make the rigid body not change rotation
    if (GetComponent.<Rigidbody>())
        GetComponent.<Rigidbody>().freezeRotation = true;
}

function LateUpdate () {

   
}

static function ClampAngle (angle : float, min : float, max : float) {
    if (angle < -360)
        angle += 360;
    if (angle > 360)
        angle -= 360;
    return Mathf.Clamp (angle, min, max);
}