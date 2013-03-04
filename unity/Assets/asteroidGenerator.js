#pragma strict
var asteroidPrefab:Rigidbody;
function Start () {
InvokeRepeating("CreateAsteroid",0,2.0);

}

function Update () {

}
function CreateAsteroid()
{

var x:float;
var y: float;
x =Random.Range(-10,10);
y = Random.Range(-10,10);


Instantiate(asteroidPrefab,Vector3 (x,y,2),Quaternion.identity);
}

