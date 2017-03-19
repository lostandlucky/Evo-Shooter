using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Health : MonoBehaviour {

	public float startHP;
	public float currentHP;

	// Use this for initialization
	void Start () {
		startHP = 100f;
	}
	
	// Update is called once per frame
	void Update () {
			
	}

	void takeDamage(float damage)
	{
		currentHP -= damage;

		if (currentHP <= 0)
		{
			
		}
	}
	
}