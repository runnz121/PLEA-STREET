package com.plestreet.community.domain;

public enum State {
	DELETE(true);

	private final boolean avaliable;

	State(boolean avaliable) {
		this.avaliable = avaliable;
	}

	public boolean isAvaliable() {
		return avaliable;
	}
}
